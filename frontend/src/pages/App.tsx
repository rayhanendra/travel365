import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Input,
  Checkbox,
  Card,
  CardBody,
  Chip,
  Image,
} from '@heroui/react';

function App() {
  const [searchData, setSearchData] = useState({
    destination: '',
    dates: '',
    guests: '',
    amenities: {
      checkin24h: false,
      freeWifi: false,
      balcony: false,
    },
  });

  const handleAmenityChange = (amenity: keyof typeof searchData.amenities) => {
    setSearchData((prev) => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: !prev.amenities[amenity],
      },
    }));
  };
  return (
    <div id="webcrumbs">
      <div className="min-h-screen">
        <div className="bg-white">
          <div className="p-4 flex justify-between items-center">
            <Button color="primary" size="sm">
              Travel365
            </Button>
            <div className="flex items-center gap-2 md:gap-3">
              <Button
                variant="light"
                color="primary"
                size="sm"
                startContent={
                  <span className="material-symbols-outlined text-lg md:text-xl">
                    help
                  </span>
                }
              >
                <span className="hidden sm:inline">Help</span>
              </Button>
              <Button
                variant="light"
                size="sm"
                endContent={
                  <span className="material-symbols-outlined text-sm">
                    expand_more
                  </span>
                }
              >
                <span className="hidden sm:inline">Manage Booking</span>
                <span className="sm:hidden">Menu</span>
              </Button>
            </div>
          </div>

          <div
            className="w-full h-[250px] md:h-[300px] bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="max-w-6xl mx-auto relative z-10 pt-6 md:pt-12 px-4 md:px-8">
              <h1 className="text-white text-lg md:text-2xl font-bold mb-3 md:mb-4">
                Thousands of hotel offers. One simple search.
              </h1>

              <Card className="bg-white shadow-lg">
                <CardBody className="p-3 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
                    <Input
                      placeholder="Search destination"
                      value={searchData.destination}
                      onValueChange={(value) =>
                        setSearchData((prev) => ({
                          ...prev,
                          destination: value,
                        }))
                      }
                      startContent={
                        <span className="material-symbols-outlined text-gray-400">
                          search
                        </span>
                      }
                      size="lg"
                    />
                    <Input
                      placeholder="Add dates"
                      value={searchData.dates}
                      onValueChange={(value) =>
                        setSearchData((prev) => ({ ...prev, dates: value }))
                      }
                      startContent={
                        <span className="material-symbols-outlined text-gray-400">
                          calendar_today
                        </span>
                      }
                      size="lg"
                    />
                    <Input
                      placeholder="Add guest"
                      value={searchData.guests}
                      onValueChange={(value) =>
                        setSearchData((prev) => ({ ...prev, guests: value }))
                      }
                      startContent={
                        <span className="material-symbols-outlined text-gray-400">
                          person
                        </span>
                      }
                      size="lg"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                    <div className="flex flex-wrap items-center gap-2 md:gap-4">
                      <Checkbox
                        isSelected={searchData.amenities.checkin24h}
                        onValueChange={() => handleAmenityChange('checkin24h')}
                        size="sm"
                      >
                        24/h check-in
                      </Checkbox>
                      <Checkbox
                        isSelected={searchData.amenities.freeWifi}
                        onValueChange={() => handleAmenityChange('freeWifi')}
                        size="sm"
                      >
                        Free wifi
                      </Checkbox>
                      <Checkbox
                        isSelected={searchData.amenities.balcony}
                        onValueChange={() => handleAmenityChange('balcony')}
                        size="sm"
                      >
                        Balcony
                      </Checkbox>
                    </div>
                    <Button
                      as={Link}
                      to="/test"
                      color="primary"
                      size="lg"
                      startContent={
                        <span className="material-symbols-outlined">
                          search
                        </span>
                      }
                      className="justify-center"
                    >
                      Search Hotels
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl md:text-2xl">
                <span className="material-symbols-outlined">public</span>
              </span>
              <div>
                <h3 className="font-medium text-sm md:text-base">
                  Worldwide Properties
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Find and book from over 150,000 hotels across the globe
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl md:text-2xl">
                <span className="material-symbols-outlined">payments</span>
              </span>
              <div>
                <h3 className="font-medium text-sm md:text-base">
                  Weekly Super Deals
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Check out weekly offers to help you save more, stay longer
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl md:text-2xl">
                <span className="material-symbols-outlined">fact_check</span>
              </span>
              <div>
                <h3 className="font-medium text-sm md:text-base">
                  Free Cancellation
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Plans changed? Get a 100% full refund on select bookings
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
            <h2 className="text-lg md:text-xl font-bold mb-4">
              Weekly super deals just for you!
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              <Chip color="primary" variant="solid" size="md">
                Malaga
              </Chip>
              <Chip color="default" variant="flat" size="md">
                Bali
              </Chip>
              <Chip color="default" variant="flat" size="md">
                Sydney
              </Chip>

              <div className="flex-grow"></div>

              <div className="flex gap-1 md:gap-2">
                <Button
                  isIconOnly
                  variant="flat"
                  size="sm"
                  className="rounded-full"
                >
                  <span className="material-symbols-outlined text-lg">
                    chevron_left
                  </span>
                </Button>
                <Button
                  isIconOnly
                  variant="flat"
                  size="sm"
                  className="rounded-full"
                >
                  <span className="material-symbols-outlined text-lg">
                    chevron_right
                  </span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="overflow-hidden">
                  <CardBody className="p-0">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="Hotel"
                        className="w-full h-32 md:h-36 object-cover"
                        radius="none"
                      />
                      <div className="absolute top-2 left-2">
                        <Chip color="danger" size="sm" className="text-white">
                          Save 30 GBP
                        </Chip>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm md:text-base mb-1">
                        Holiday Inn Hamburg
                      </h3>
                      <div className="flex text-yellow-400 mb-1">
                        {[1, 2, 3, 4].map((star) => (
                          <span
                            key={star}
                            className="material-symbols-outlined text-sm"
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <div className="text-xs text-gray-600 mb-2">
                        Hotel | Family Friendly
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs">From</div>
                        <div className="text-base md:text-lg font-bold text-red-500">
                          £200
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-6">
            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
              Travel with a theme
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardBody className="flex flex-col items-center justify-center p-4 md:p-6">
                  <span className="text-blue-600 text-2xl md:text-3xl mb-2 md:mb-3">
                    <span className="material-symbols-outlined">
                      family_restroom
                    </span>
                  </span>
                  <h3 className="font-medium text-center text-sm md:text-base">
                    Family Friendly
                  </h3>
                  <p className="text-xs text-gray-500 text-center">
                    20000+ hotels
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardBody className="flex flex-col items-center justify-center p-4 md:p-6">
                  <span className="text-blue-600 text-2xl md:text-3xl mb-2 md:mb-3">
                    <span className="material-symbols-outlined">luggage</span>
                  </span>
                  <h3 className="font-medium text-center text-sm md:text-base">
                    Backpacker
                  </h3>
                  <p className="text-xs text-gray-500 text-center">
                    20000+ hotels
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardBody className="flex flex-col items-center justify-center p-4 md:p-6">
                  <span className="text-blue-600 text-2xl md:text-3xl mb-2 md:mb-3">
                    <span className="material-symbols-outlined">
                      celebration
                    </span>
                  </span>
                  <h3 className="font-medium text-center text-sm md:text-base">
                    Party Friendly
                  </h3>
                  <p className="text-xs text-gray-500 text-center">
                    20000+ hotels
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardBody className="flex flex-col items-center justify-center p-4 md:p-6">
                  <span className="text-blue-600 text-2xl md:text-3xl mb-2 md:mb-3">
                    <span className="material-symbols-outlined">
                      business_center
                    </span>
                  </span>
                  <h3 className="font-medium text-center text-sm md:text-base">
                    Business Type
                  </h3>
                  <p className="text-xs text-gray-500 text-center">
                    20000+ hotels
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
