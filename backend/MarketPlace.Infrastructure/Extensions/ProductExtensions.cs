using MarketPlace.Domain.Models;
using MarketPlace.Domain.Collections;
using MarketPlace.Infrastructure.Collections;
using System.Linq.Expressions;
namespace MarketPlace.Infrastructure.Extensions;

public static class ProductExtensions
{
    public static IQueryable<Product> Sort(this IQueryable<Product> quiryable, ProductQuery args)
    {
        return args.Dimension.Equals(DimensionTypes.Descending) ?
                quiryable.OrderByDescending(GetKeySelector(args.SortBy == null ? string.Empty : args.SortBy)) :
                quiryable.OrderBy(GetKeySelector(args.SortBy == null ? string.Empty : args.SortBy));
    }

    private static Expression<Func<Product, object>> GetKeySelector(string parameter)
    {
        if (string.IsNullOrEmpty(parameter))
        {
            return x => x.Title;
        }
        return parameter switch
        {
            nameof(Product.Price) => x => x.Price,
            _ => x => x.Title
        };
    }
}