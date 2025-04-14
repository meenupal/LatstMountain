import Image from 'next/image';

const trips = [
  {
    title: 'Mount Agung, Bali - Indonesia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam',
    days: 2,
    guests: 5,
    price: '$370',
    image: '/deal31.jpg',
  },
  {
    title: 'Mount Rinjani, NTB - Indonesia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam',
    days: 4,
    guests: 8,
    price: '$400',
    image: '/deal27.jpg',
  },
  {
    title: 'Mount Jayawijaya, Papua - Indonesia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam',
    days: 6,
    guests: 5,
    price: '$950',
    image: '/deal32.jpg',
  },
  {
    title: 'Mount Agung, Bali - Indonesia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam',
    days: 2,
    guests: 5,
    price: '$370',
    image: '/deal31.jpg',
  },
  {
    title: 'Mount Rinjani, NTB - Indonesia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam',
    days: 4,
    guests: 8,
    price: '$400',
    image: '/deal27.jpg',
  },
  {
    title: 'Mount Jayawijaya, Papua - Indonesia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam',
    days: 6,
    guests: 5,
    price: '$950',
    image: '/deal32.jpg',
  },
];

export default function TripCards() {
  return (
    <section className="px-4 py-12 md:px-48 lg:px-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols- gap-8">
        {trips.map((trip, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative h-78 w-full overflow-hidden rounded-xl">
              <Image
                src={trip.image}
                alt={trip.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute bottom-0 w-full flex justify-center py-4 px-24">
                <div className="grid grid-cols-3 w-full text-center">
                  <div className="bg-orange-500 text-white py-3">
                    <p className="text-xl font-bold">{trip.guests}</p>
                    <p className="text-sm">Guest</p>
                  </div>
                  <div className="bg-orange-500 text-white py-3">
                    <p className="text-xl font-bold">{trip.days}</p>
                    <p className="text-sm">Days</p>
                  </div>
                  <div className="bg-white text-orange-600 py-3">
                    <p className="text-xl font-bold">{trip.price}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {trip.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {trip.description}
              </p>
              <button className="text-orange-600 font-semibold text-sm flex items-center gap-2">
                START JOURNEY
                <span className="text-lg">&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
