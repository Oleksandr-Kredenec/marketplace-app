namespace MarketPlace.Domain.Collections;
public record ProductQuery{
    public string? SortBy { get; init; }
    public string Dimension { get; init; } = string.Empty;
    }