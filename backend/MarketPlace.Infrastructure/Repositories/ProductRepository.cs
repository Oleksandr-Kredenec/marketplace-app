using Microsoft.EntityFrameworkCore;
using MarketPlace.Domain.Models;
using MarketPlace.Domain.Collections;
using MarketPlace.Domain.Interfaces;
using MarketPlace.Infrastructure.Extensions;
using MarketPlace.Application.Query.Sorting;

namespace MarketPlace.Infrastructure.Repositories;
public class ProductRepository : IProductRepository
{
    private readonly MarketPlaceDbContext _database;

    public ProductRepository(MarketPlaceDbContext database)
    {
        _database = database;
    }

    public async Task<List<Product>> GetAllProductsAsync(ProductQuery args)
    {
        List<Product> products = await _database.Products
                .AsNoTracking()
                .Sort(args)
                .ToListAsync();

        return products;
    }

    public async Task<Product?> GetProductByIdAsync(Guid id)
    {
        Product? product = await _database.Products
                .AsNoTracking()
                .FirstOrDefaultAsync(p => p.Id == id);
        
        return product;
    }

    public async Task<Product?> GetProductBySlugAsync(string slug){
        Product? product =
            await _database.Products.FirstOrDefaultAsync(p => p.Slug == slug);
        
        return product;
    }

    public async Task<Product?> AddProductAsync(Product product)
    {
        _database.Products.Add(product);
        await _database.SaveChangesAsync();
        return product;
    }

    public async Task<Product?> UpdateProductAsync(Product product)
    {
        _database.Products.Update(product);
        await _database.SaveChangesAsync();
        return product;
    }

    public async Task<Product?> RemoveProductAsync(Product product)
    {
        _database.Products.Remove(product);
        await _database.SaveChangesAsync();
        return product;
    }
}