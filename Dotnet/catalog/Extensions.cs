using catalog.dtos;
using catalog.entities;

namespace catalog
{
    public static class Externsions{
        public static ItemDto AsDto(this Item item){
            return new ItemDto
            {
                Id = item.Id,
                name = item.name,
                Price = item.Price,
                CreatedDate = item.CreatedDate
            };
        }
    }
}