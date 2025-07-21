import { Button, Checkbox, RadioGroup, Radio } from '@heroui/react';

function Result() {
  const hotelResults = [
    {
      id: 1,
      name: 'Grand Hotel Malaga',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      stars: 5,
      price: 180,
      originalPrice: 220,
      location: 'City Center, Malaga',
      distance: '0.5 km from center',
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant'],
      reviews: 1245,
      breakfast: true,
    },
    {
      id: 2,
      name: 'Hotel Mariposa',
      image:
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.2,
      stars: 4,
      price: 95,
      originalPrice: 120,
      location: 'Beach Area, Malaga',
      distance: '1.2 km from center',
      amenities: ['Free WiFi', 'Beach Access', 'Restaurant'],
      reviews: 832,
      breakfast: false,
    },
    {
      id: 3,
      name: 'Boutique Hotel Vista',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      stars: 4,
      price: 145,
      originalPrice: null,
      location: 'Historic Quarter, Malaga',
      distance: '0.8 km from center',
      amenities: ['Free WiFi', 'Rooftop Bar', 'Concierge'],
      reviews: 567,
      breakfast: true,
    },
  ];

  return (
    <div id="webcrumbs">
      <div className="p-4">
        <div className="max-w-6xl mx-auto bg-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-3 border rounded-lg px-2 py-2 border-gray-200">
            <div className="w-full md:w-auto overflow-x-auto">
              <div className="flex items-center whitespace-nowrap gap-4 font-medium">
                <span className="bg-gray-100 rounded-md p-3 text-sm">
                  Malaga, Spain
                </span>
                <div className="h-7 border border-l-0.5 border-gray-300"></div>
                <span className="text-sm">15 MAY - 19 JUN</span>
                <div className="h-7 border border-l-0.5 border-gray-300"></div>
                <span className="text-sm">4 adult, 6 children, 3 rooms</span>
              </div>
            </div>
            <Button
              color="primary"
              variant="bordered"
              className="rounded-md border-1 px-3 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Update
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/4 order-2 lg:order-1">
              <div className="sticky top-4">
                <div className="mb-4 flex justify-between items-center">
                  <p className="font-medium text-lg">Filter</p>
                  <button className="lg:hidden text-blue-600 text-sm flex items-center hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Reset
                  </button>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 pb-4 mb-4">
                  <details open>
                    <summary className="flex justify-between items-center mb-2 cursor-pointer list-none">
                      <span className="font-medium mb-2">Top Options</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </summary>
                    <div className="space-y-2 pl-1">
                      <Checkbox id="24hrCheckIn" defaultSelected size="sm">
                        24hr check-in
                      </Checkbox>
                      <Checkbox id="freeWifi" defaultSelected size="sm">
                        Free wifi
                      </Checkbox>
                      <Checkbox id="balcony" size="sm">
                        Balcony
                      </Checkbox>
                    </div>
                  </details>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 pb-4 mb-4">
                  <details open>
                    <summary className="flex justify-between items-center mb-2 cursor-pointer list-none">
                      <span className="font-medium mb-2">
                        Price (per Night)
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </summary>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>$50</span>
                        <span>$950</span>
                      </div>
                      <div className="relative w-full py-2">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                          <div className="bg-blue-600 h-1 rounded-full w-2/3"></div>
                        </div>
                        <div className="absolute -top-1 left-2/3 transform -translate-x-1/2">
                          <div className="w-5 h-5 bg-white border border-blue-600 rounded-full shadow cursor-pointer"></div>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 pb-4 mb-4">
                  <details open>
                    <summary className="flex justify-between items-center mb-2 cursor-pointer list-none">
                      <span className="font-medium mb-2">Star Rating</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </summary>
                    <div className="space-y-2 pl-1">
                      <Checkbox
                        id="5star"
                        size="sm"
                        className="flex items-center"
                      >
                        <span className="text-yellow-400 text-sm">★★★★★</span>
                      </Checkbox>
                      <Checkbox
                        id="4star"
                        size="sm"
                        defaultSelected
                        className="flex items-center"
                      >
                        <span className="text-yellow-400 text-sm">★★★★</span>
                      </Checkbox>
                      <Checkbox
                        id="3star"
                        size="sm"
                        className="flex items-center"
                      >
                        <span className="text-yellow-400 text-sm">★★★</span>
                      </Checkbox>
                      <Checkbox
                        id="2star"
                        size="sm"
                        className="flex items-center"
                      >
                        <span className="text-yellow-400 text-sm">★★</span>
                      </Checkbox>
                    </div>
                  </details>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 pb-4 mb-4">
                  <details open>
                    <summary className="flex justify-between items-center mb-2 cursor-pointer list-none">
                      <span className="font-medium mb-2">Property Type</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </summary>
                    <div className="space-y-2 pl-1">
                      <RadioGroup defaultValue="hotel" size="sm">
                        <Radio value="hotel" color="primary">
                          Hotel
                        </Radio>
                        <Radio value="motel">Motel</Radio>
                        <Radio value="guesthouse">Guesthouse</Radio>
                        <Radio value="apartment">Apartment</Radio>
                      </RadioGroup>
                      <button className="text-blue-600 text-sm flex items-center mt-1 hover:underline">
                        Show More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </details>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 pb-4 mb-4">
                  <details open>
                    <summary className="flex justify-between items-center mb-2 cursor-pointer list-none">
                      <span className="font-medium mb-2">
                        Property Facilities
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </summary>
                    <div className="space-y-2 pl-1">
                      <Checkbox id="24hrCheckInFac" size="sm">
                        24hr check-in
                      </Checkbox>
                      <Checkbox id="freeWifiFac" size="sm">
                        Free wifi
                      </Checkbox>
                      <Checkbox id="balconyFac" size="sm">
                        Balcony
                      </Checkbox>
                      <Checkbox id="spaFac" size="sm">
                        Spa
                      </Checkbox>
                      <button className="text-blue-600 text-sm flex items-center mt-1 hover:underline">
                        Show More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </details>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 pb-4 mb-4">
                  <details open>
                    <summary className="flex justify-between items-center mb-2 cursor-pointer list-none">
                      <span className="font-medium mb-2">Room Facilities</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </summary>
                    <div className="space-y-2 pl-1">
                      <Checkbox id="airCond" defaultSelected size="sm">
                        Air conditioning
                      </Checkbox>
                      <Checkbox id="balconyRoom" defaultSelected size="sm">
                        Balcony
                      </Checkbox>
                      <Checkbox id="hairdryer" size="sm">
                        Hairdryer
                      </Checkbox>
                      <Checkbox id="coffeeMachine" size="sm">
                        Coffee machine
                      </Checkbox>
                      <button className="text-blue-600 text-sm flex items-center mt-1 hover:underline">
                        Show More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/4 order-1 lg:order-2">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <span className="font-medium text-lg">
                  {hotelResults.length} Properties found
                </span>
                <div className="relative w-full sm:w-auto">
                  <details className="w-full sm:w-auto">
                    <summary className="flex items-center justify-between sm:justify-start px-3 py-2 bg-gray-100 rounded-md cursor-pointer">
                      <span className="mr-2 text-sm text-gray-500">Sort:</span>
                      <span className="flex items-center text-sm">
                        Recommended
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="absolute right-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Recommended
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Price (low to high)
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Price (high to low)
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Rating (high to low)
                      </a>
                    </div>
                  </details>
                </div>
              </div>

              {hotelResults.map((hotel) => (
                <div
                  key={hotel.id}
                  className="border border-gray-300 rounded-lg mb-4 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 relative">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 text-xs px-2 py-1 rounded">
                        {hotel.location}
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500 px-2 py-0.5 bg-gray-100 rounded">
                              Hotel
                            </span>
                            <div className="flex text-yellow-400 text-sm">
                              <span>{'★'.repeat(hotel.stars)}</span>
                            </div>
                          </div>
                          <h3 className="font-medium text-lg mt-1">
                            {hotel.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {hotel.distance}
                          </p>
                          <button className="text-blue-600 text-xs hover:underline flex items-center mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            Show on Map
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            {hotel.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                ${hotel.originalPrice}
                              </span>
                            )}
                            <div className="text-xl font-semibold">
                              ${hotel.price}
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">per night</div>
                          <div className="flex items-center text-xs text-gray-600 mt-1">
                            <span className="text-yellow-400 mr-1">★</span>
                            <span>{hotel.rating}</span>
                            <span className="ml-1">
                              ({hotel.reviews} reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-600 mr-1 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm">Free cancellation</span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-600 mr-1 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm">Standard double room</span>
                        </div>
                        {hotel.breakfast && (
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-green-600 mr-1 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm">Breakfast included</span>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {hotel.amenities.map((amenity, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-100 px-2 py-1 rounded"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end mt-3">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded flex items-center hover:bg-blue-700 transition-colors">
                          Book
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="border rounded-md mb-4 overflow-hidden bg-blue-600 text-white p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-lg">This week super deals</h3>
                  <div className="flex space-x-2">
                    <button className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-blue-600 hover:bg-gray-100 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-blue-600 hover:bg-gray-100 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="bg-white rounded-md overflow-hidden text-black hover:shadow-lg transform hover:-translate-y-1 transition-all"
                    >
                      <div className="relative">
                        <img
                          src={`https://source.unsplash.com/random/300x200?hotel,resort&sig=${item + 10}`}
                          alt="Hotel deal"
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          -30%
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium">Holiday Inn Hamburg</h4>
                        <div className="flex text-yellow-400 text-xs my-1">
                          <span>★★★★</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                          <span>Hotel</span>
                          <span>Family Friendly</span>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-xs text-gray-500">From</div>
                            <div className="text-lg font-semibold text-blue-600">
                              $180
                            </div>
                          </div>
                          <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 border rounded text-blue-600 border-blue-600 hover:bg-blue-50 transition-colors">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    1
                  </button>
                  <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50 transition-colors">
                    2
                  </button>
                  <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50 transition-colors">
                    3
                  </button>
                  <span className="px-2">...</span>
                  <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-50 transition-colors">
                    15
                  </button>
                  <button className="px-3 py-1 border rounded text-blue-600 border-blue-600 hover:bg-blue-50 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
            {/* Next: "Add comparison feature for hotels" */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
