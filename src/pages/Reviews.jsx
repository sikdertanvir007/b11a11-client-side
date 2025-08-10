// src/components/Reviews.jsx
const reviewsData = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment: "Amazing products and fast delivery! Highly recommend MegaMerx.",
  },
  {
    id: 2,
    name: "Michael Smith",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 4,
    comment: "Great variety and customer service was very helpful.",
  },
  {
    id: 3,
    name: "Sophia Lee",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    comment: "Love the hot deals section! Saved a lot on my purchases.",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-500">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {reviewsData.map(({ id, name, avatar, rating, comment }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <img
                src={avatar}
                alt={name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">
                {name}
              </h3>
              <div className="mb-3 flex space-x-1 text-yellow-400">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.403 2.47a1 1 0 00-.364 1.118l1.286 3.974c.3.922-.755 1.688-1.54 1.118l-3.403-2.47a1 1 0 00-1.176 0l-3.403 2.47c-.784.57-1.838-.196-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.037 9.4c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.286-3.974z" />
                    </svg>
                  ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"{comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
