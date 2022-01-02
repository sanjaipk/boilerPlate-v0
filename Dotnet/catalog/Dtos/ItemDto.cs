using System;

namespace catalog.dtos
{
    public record ItemDto
    {
        public Guid Id { get; init; }
        public string name { get; init; }
        public Decimal Price { get; init; }
        public DateTimeOffset CreatedDate { get; init; }
    }
}
