using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication.Repos;

namespace WebApplication.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class LocationsController : ControllerBase
    {
        private readonly ILocationRepository _locationRepository;

        public LocationsController(ILocationRepository locationRepository)
        {
            _locationRepository = locationRepository;
        }

        [HttpGet]
        public IActionResult GetLocations()
        {
            var start = new TimeOnly(10, 0);
            var end = new TimeOnly(13, 0);

            var locations = _locationRepository.GetLocations(start,end);
            if (locations.Any())
            {
                return Ok(locations);
            }
            else
            {
                return NotFound("No locations available between 10 am and 1 pm.");
            }
        }

    }

 
}
