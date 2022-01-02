using System;

namespace catalog.entities
{
    public record Item
    {
        public Guid Id { get; init; }
        public string name { get; init; }
        public Decimal Price { get; init; }
        public DateTimeOffset CreatedDate { get; init; }
    }
}
