using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using catalog.entities;
using Microsoft.AspNetCore.Mvc;

namespace catalog.repositories
{
    

    public class InMemItemRepo : IItemRepo
    {
        private readonly List<Item> items = new()
        {
            new Item { Id = Guid.NewGuid(), name = "pooja", Price = 1, CreatedDate = DateTimeOffset.UtcNow },
            new Item { Id = Guid.NewGuid(), name = "raja", Price = 12, CreatedDate = DateTimeOffset.UtcNow },
            new Item { Id = Guid.NewGuid(), name = "saroja", Price = 213, CreatedDate = DateTimeOffset.UtcNow },
            new Item { Id = Guid.NewGuid(), name = "raja", Price = 897, CreatedDate = DateTimeOffset.UtcNow },
        };

        public async Task<IEnumerable<Item>> GetItemsAsync()
        {
            return await Task.FromResult(items);
        }

        public async Task<Item> GetItemAsync(Guid id)
        {
            var item = items.Where(item => item.Id == id).SingleOrDefault();
            return await Task.FromResult(item);
        }

        public async Task CreateItemAsync(Item item)
        {
            items.Add(item);
            await Task.CompletedTask;
        }

        public async Task  UpdateItemAsync(Item item)
        {
            var index = items.FindIndex(existingItem => existingItem.Id == item.Id);
            items[index] = item;
            await Task.CompletedTask;
        }

        public async Task  DeleteItemAsync(Guid id){
            var index = items.FindIndex(existingItem => existingItem.Id == id);
            items.RemoveAt(index);
            await Task.CompletedTask;
        }
    }
}