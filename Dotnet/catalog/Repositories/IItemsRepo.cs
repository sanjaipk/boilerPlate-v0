using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using catalog.entities;

namespace catalog.repositories
{
    public interface IItemRepo
    {
        Task<Item> GetItemAsync(Guid id);
        Task<IEnumerable<Item>> GetItemsAsync();
        Task CreateItemAsync(Item item);
        Task UpdateItemAsync(Item item);
        Task DeleteItemAsync(Guid id);
    }
}