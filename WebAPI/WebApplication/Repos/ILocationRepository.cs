using WebApplication.Controllers;

namespace WebApplication.Repos
{
    public interface ILocationRepository
    {
        IEnumerable<Location> GetLocations(TimeOnly s, TimeOnly e);
    }

    public class LocationRepository : ILocationRepository
    {
        private readonly List<Location> _locations;

        public LocationRepository()
        {
            // Initialize with some data

            _locations = new List<Location>
            {
               new Location {
                   Name= "Barber Shop",
                   Start = new TimeOnly(10,0),
                   End = new TimeOnly(12,0)
               },
               new Location {
                   Name= "Coffee Shop",
                   Start = new TimeOnly(8,0),
                   End = new TimeOnly(18,0)
               },
               new Location {
                   Name= "Library",
                   Start = new TimeOnly(9,0),
                   End = new TimeOnly(17,0)
               },
               new Location {
                   Name= "Gym",
                   Start = new TimeOnly(6,0),
                   End = new TimeOnly(22,0)
               }
            };
        }

        public IEnumerable<Location> GetLocations(TimeOnly start, TimeOnly end)
        {
            return _locations.Where(
                    x=> x.Start <= start
                    && x.End >= end
                );
        }


    }
}
