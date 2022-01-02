using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using catalog;
using catalog.dtos;
using catalog.entities;
using catalog.repositories;
using Microsoft.AspNetCore.Mvc;

namespace ItemsController
{
    [ApiController]
    [Route("[controller]")]
    public class ItemsController: ControllerBase
    {
        private readonly IItemRepo repo;
        public ItemsController(IItemRepo repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public async Task<IEnumerable<ItemDto>> GetItems()
        {
            var items = (await repo.GetItemsAsync())
                    .Select(item => item.AsDto());
            return items;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ItemDto>> GetItem(Guid id){
            var item = await repo.GetItemAsync(id);
            if(item is null){
                return NotFound();
            }
            return Ok(item.AsDto());
        }

        [HttpPost]
        public async Task<ActionResult<ItemDto>> CreateItem(CreateItemDto itemDto){
            Item item = new()
            {
                Id = Guid.NewGuid(),
                name = itemDto.Name,
                Price = itemDto.Price,
                CreatedDate = DateTimeOffset.UtcNow
            };
            await repo.CreateItemAsync(item);
            return CreatedAtAction(nameof(GetItem), new { id = item.Id }, item.AsDto());
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateItem(Guid id, UpdateItemDto itemDto){
            var existingItem = await repo.GetItemAsync(id);
            if(existingItem is null){
                return NotFound();
            }
            Item updatedItem = existingItem with
            {
                name = itemDto.Name,
                Price = itemDto.Price
            };
            await repo.UpdateItemAsync(updatedItem);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteItem(Guid id){
            var existingItem = await repo.GetItemAsync(id);
            if(existingItem is null){
                return NotFound();
            }
            await repo.DeleteItemAsync(id);
            return NoContent();
        }
    }
}