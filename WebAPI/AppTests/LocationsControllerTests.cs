using Microsoft.AspNetCore.Mvc;
using Moq;
using WebApplication.Controllers;
using WebApplication.Repos;

namespace AppTests
{
    public class LocationsControllerTests
    {
        private readonly Mock<ILocationRepository> _mockRepo;
        private readonly LocationsController _controller;

        public LocationsControllerTests()
        {
            _mockRepo = new Mock<ILocationRepository>();
            _controller = new LocationsController(_mockRepo.Object);
        }

        [Fact]
        public async void GetLocations_ReturnsOk_WhenLocationsExist()
        {

            _mockRepo.Setup(repo => repo.GetLocations(It.IsAny<TimeOnly>(), It.IsAny<TimeOnly>()))
                .Returns(new List<Location>() { new Location() });

            var result =   _controller.GetLocations();

            Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public void GetLocations_ReturnsNotFound_WhenNoLocationsExist()
        {
            _mockRepo.Setup(repo => repo.GetLocations(It.IsAny<TimeOnly>(), It.IsAny<TimeOnly>()))
                .Returns(new List<Location>());

            var result = _controller.GetLocations();

            Assert.IsType<NotFoundObjectResult>(result);
        }

        
    }
}