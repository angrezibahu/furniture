import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Manchester",
    rating: 5,
    text: "Absolutely love our new Jordan corner sofa. The quality is incredible for the price. Delivery was quick and the team were so helpful.",
    date: "2 weeks ago",
  },
  {
    name: "James T.",
    location: "Birmingham",
    rating: 5,
    text: "Third time ordering from NCF. The furniture quality is outstanding and the 0% finance made it so easy. Can't recommend enough!",
    date: "1 week ago",
  },
  {
    name: "Emma L.",
    location: "London",
    rating: 5,
    text: "The Maya bed frame is stunning in person. So well made and looks far more expensive than it was. Fantastic service from start to finish.",
    date: "3 days ago",
  },
  {
    name: "David R.",
    location: "Bristol",
    rating: 5,
    text: "Best furniture shopping experience I've had. Website was easy to use, delivery was on time, and the Oakley dining table is beautiful.",
    date: "5 days ago",
  },
];

const TrustpilotStrip = () => {
  return (
    <section className="py-16 sm:py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with TrustPilot branding */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-trustpilot flex items-center justify-center"
                >
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-charcoal font-medium">
            Rated <span className="font-bold">Excellent</span> on Trustpilot
          </p>
          <p className="text-xs text-taupe mt-1">
            Based on{" "}
            <span className="font-semibold text-charcoal">40,000+</span>{" "}
            verified reviews
          </p>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white p-5 sm:p-6 border border-stone/20 hover:border-stone/40 transition-colors"
            >
              <div className="flex items-center gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${
                      s <= review.rating
                        ? "fill-trustpilot text-trustpilot"
                        : "text-stone"
                    }`}
                  />
                ))}
              </div>
              <Quote className="w-5 h-5 text-stone-dark mb-2 rotate-180" />
              <p className="text-sm text-charcoal leading-relaxed mb-4">
                {review.text}
              </p>
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-charcoal">
                    {review.name}
                  </span>
                  <span className="text-taupe ml-1.5">{review.location}</span>
                </div>
                <span className="text-taupe">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-sm text-taupe">
            See all our reviews on{" "}
            <a
              href="https://uk.trustpilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-trustpilot hover:underline"
            >
              Trustpilot
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotStrip;
