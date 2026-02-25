import { Link } from "react-router-dom";
import {
  RotateCcw,
  Clock,
  Package,
  AlertCircle,
  CheckCircle,
  Truck,
  ShieldCheck,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Returns = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      <AnnouncementBar />
      <Header />

      {/* Hero / Breadcrumb */}
      <section className="bg-cream border-b border-stone/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <nav className="flex items-center gap-2 text-sm text-taupe mb-4">
            <Link to="/" className="hover:text-charcoal transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-charcoal font-medium">
              Returns &amp; Refunds
            </span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal">
            Returns &amp; Refunds
          </h1>
          <p className="mt-3 text-taupe max-w-2xl text-base sm:text-lg">
            We want you to love your new furniture. If something isn't right, our
            returns process is straightforward and fair, in line with your UK
            consumer rights.
          </p>
        </div>
      </section>

      {/* Quick summary cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Clock,
              title: "14-Day Cooling-Off",
              desc: "Cancel within 14 days of delivery — no reason needed",
            },
            {
              icon: RotateCcw,
              title: "Free Faulty Returns",
              desc: "We cover return costs for faulty or incorrect items",
            },
            {
              icon: Truck,
              title: "Collection Available",
              desc: "We can arrange collection for large furniture items",
            },
            {
              icon: ShieldCheck,
              title: "Full Refund",
              desc: "Refunds processed within 14 days of receiving your return",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-stone/40 p-6 flex flex-col items-start gap-3"
            >
              <div className="w-10 h-10 bg-cream-dark rounded-full flex items-center justify-center">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-medium text-charcoal text-sm">{title}</h3>
              <p className="text-sm text-taupe leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="space-y-12">
          {/* 1. Your Right to Cancel */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Your Right to Cancel
              </h2>
            </div>
            <div className="pl-11 space-y-4 text-charcoal-light text-[15px] leading-relaxed">
              <p>
                Under the Consumer Contracts (Information, Cancellation and
                Additional Charges) Regulations 2013, you have the right to
                cancel your order within <strong>14 days</strong> of receiving
                your goods, without giving any reason.
              </p>
              <p>
                The cancellation period expires 14 days after the day on which
                you, or a third party indicated by you (other than the carrier),
                physically receives the goods. For orders delivered in multiple
                parts, the 14-day period begins the day after you receive the
                final item.
              </p>
              <p>
                To exercise your right to cancel, you must inform us of your
                decision by a clear statement (e.g. by post, email, or
                telephone). You may use our contact details below or download
                and complete the model cancellation form, though this is not
                obligatory.
              </p>
              <p>
                To meet the cancellation deadline, it is sufficient for you to
                send your communication concerning the exercise of your right to
                cancel before the cancellation period has expired.
              </p>
            </div>
          </section>

          {/* 2. How to Return an Item */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                How to Return an Item
              </h2>
            </div>
            <div className="pl-11 space-y-4 text-charcoal-light text-[15px] leading-relaxed">
              <div className="bg-cream border border-stone/40 p-5 space-y-3">
                <h3 className="font-medium text-charcoal text-sm uppercase tracking-wider">
                  Step-by-step
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    Contact our Customer Care team by email at{" "}
                    <a
                      href="mailto:returns@ncf.co.uk"
                      className="text-gold-dark hover:underline"
                    >
                      returns@ncf.co.uk
                    </a>{" "}
                    or call{" "}
                    <a
                      href="tel:03330154567"
                      className="text-gold-dark hover:underline"
                    >
                      0333 015 4567
                    </a>{" "}
                    to notify us of your return.
                  </li>
                  <li>
                    You will receive a returns authorisation number and
                    instructions within 2 working days.
                  </li>
                  <li>
                    Package the item securely in its original packaging where
                    possible.
                  </li>
                  <li>
                    For large furniture items, we will arrange a collection at a
                    time that suits you. For smaller items, you may return them
                    by post or courier.
                  </li>
                  <li>
                    Once we receive and inspect the returned item, we will
                    process your refund.
                  </li>
                </ol>
              </div>
              <p>
                You must send back the goods without undue delay and in any
                event not later than <strong>14 days</strong> from the day on
                which you communicate your cancellation to us. The deadline is
                met if you send back the goods before the 14-day period has
                expired.
              </p>
            </div>
          </section>

          {/* 3. Condition of Returned Goods */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Condition of Returned Goods
              </h2>
            </div>
            <div className="pl-11 space-y-4 text-charcoal-light text-[15px] leading-relaxed">
              <p>
                You may handle the goods to the extent necessary to establish
                their nature, characteristics, and functioning — in the same way
                you would be allowed to in a shop. If you handle the goods
                beyond what is necessary, we may deduct an amount from your
                refund to reflect any diminished value.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-sage-light/50 border border-sage/30 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    <h4 className="text-sm font-medium text-charcoal">
                      We can accept
                    </h4>
                  </div>
                  <ul className="text-sm space-y-1.5 text-charcoal-light">
                    <li>Items in original or equivalent packaging</li>
                    <li>Items inspected but not used</li>
                    <li>Items with all original labels and tags</li>
                    <li>Flat-pack items that have not been assembled</li>
                  </ul>
                </div>
                <div className="bg-blush/10 border border-blush/30 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-blush" />
                    <h4 className="text-sm font-medium text-charcoal">
                      Deductions may apply
                    </h4>
                  </div>
                  <ul className="text-sm space-y-1.5 text-charcoal-light">
                    <li>Items that have been assembled</li>
                    <li>Items showing signs of use beyond inspection</li>
                    <li>Items without original packaging</li>
                    <li>Items with stains, marks, or damage</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Refunds */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Refunds
              </h2>
            </div>
            <div className="pl-11 space-y-4 text-charcoal-light text-[15px] leading-relaxed">
              <p>
                If you cancel your order, we will reimburse all payments
                received from you, including the cost of standard delivery (if
                applicable). If you chose a delivery method more expensive than
                the least expensive standard delivery we offer, we will not
                reimburse the supplementary costs.
              </p>
              <p>
                We will make the reimbursement without undue delay and not later
                than:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>14 days</strong> after the day we receive the returned
                  goods back; or
                </li>
                <li>
                  <strong>14 days</strong> after the day you provide evidence
                  that you have returned the goods (if earlier); or
                </li>
                <li>
                  <strong>14 days</strong> after the day of cancellation if no
                  goods have been dispatched.
                </li>
              </ul>
              <p>
                Refunds will be made using the same means of payment you used
                for the original transaction, unless you have expressly agreed
                otherwise. You will not incur any fees as a result of the
                reimbursement.
              </p>
            </div>
          </section>

          {/* 5. Cost of Returns */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-semibold">
                5
              </div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Cost of Returns
              </h2>
            </div>
            <div className="pl-11 space-y-4 text-charcoal-light text-[15px] leading-relaxed">
              <p>
                If you are returning goods because you have changed your mind
                (exercising your right to cancel), you will bear the direct cost
                of returning the goods.
              </p>
              <p>
                For large furniture items, due to their size and weight, return
                costs may be significant. We can arrange collection on your
                behalf — please contact us for a quote. Typical collection costs
                are:
              </p>
              <div className="bg-cream border border-stone/40 p-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone/40">
                      <th className="text-left py-2 font-medium text-charcoal">
                        Item type
                      </th>
                      <th className="text-right py-2 font-medium text-charcoal">
                        Estimated cost
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-charcoal-light">
                    <tr className="border-b border-stone/20">
                      <td className="py-2">Small items (cushions, accessories)</td>
                      <td className="text-right py-2">Customer arranges post</td>
                    </tr>
                    <tr className="border-b border-stone/20">
                      <td className="py-2">Medium items (dining chairs, side tables)</td>
                      <td className="text-right py-2">From &pound;29.99</td>
                    </tr>
                    <tr className="border-b border-stone/20">
                      <td className="py-2">Large items (sofas, beds, dining tables)</td>
                      <td className="text-right py-2">From &pound;59.99</td>
                    </tr>
                    <tr>
                      <td className="py-2">Oversized / multi-item orders</td>
                      <td className="text-right py-2">Quote on request</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                If we delivered the item to you free of charge, we will not
                charge you for return collection where the item is faulty or was
                delivered in error.
              </p>
            </div>
          </section>

          {/* 6. Faulty, Damaged, or Incorrect Goods */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-semibold">
                6
              </div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Faulty, Damaged, or Incorrect Goods
              </h2>
            </div>
            <div className="pl-11 space-y-4 text-charcoal-light text-[15px] leading-relaxed">
              <p>
                Under the Consumer Rights Act 2015, goods must be of
                satisfactory quality, fit for purpose, and as described. If your
                item is faulty, damaged on arrival, or not what you ordered, you
                have the following rights:
              </p>
              <div className="space-y-4">
                <div className="border-l-2 border-gold pl-4">
                  <h4 className="font-medium text-charcoal text-sm">
                    Within 30 days of delivery
                  </h4>
                  <p className="text-sm mt-1">
                    You have a short-term right to reject the goods and receive
                    a full refund. We will cover the cost of return collection.
                  </p>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <h4 className="font-medium text-charcoal text-sm">
                    31 days to 6 months after delivery
                  </h4>
                  <p className="text-sm mt-1">
                    You are entitled to a repair or replacement. If the repair
                    or replacement is unsuccessful, you are entitled to a full
                    refund. The burden of proof is on us to show the goods were
                    not faulty at the time of delivery.
                  </p>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <h4 className="font-medium text-charcoal text-sm">
                    6 months to 6 years after delivery
                  </h4>
                  <p className="text-sm mt-1">
                    You may still be entitled to a repair, replacement, or
                    partial refund, but you will need to demonstrate that the
                    fault was present at the time of delivery. Any refund may
                    include a deduction for use.
                  </p>
                </div>
              </div>
              <div className="bg-cream border border-stone/40 p-5 flex items-start gap-3">
                <Package className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-charcoal mb-1">
                    Reporting damage on delivery
                  </p>
                  <p>
                    Please inspect your furniture upon delivery. If you notice
                    any damage, note it on the delivery paperwork and contact us
                    within 48 hours with photographs. This helps us resolve your
                    issue as quickly as possible.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Made-to-Order and Bespoke Items */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-semibold">
                7
              </div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Made-to-Order &amp; Bespoke Items
              </h2>
            </div>
            <div className="pl-11 space-y-4 text-charcoal-light text-[15px] leading-relaxed">
              <p>
                Items made to your specification or clearly personalised (such
                as custom fabric or size choices) are exempt from the 14-day
                right to cancel under the Consumer Contracts Regulations 2013.
                This will be clearly stated on the product page and in your
                order confirmation.
              </p>
              <p>
                Your statutory rights under the Consumer Rights Act 2015 still
                apply — if a made-to-order item is faulty, not as described, or
                not fit for purpose, you are entitled to a repair, replacement,
                or refund as outlined above.
              </p>
            </div>
          </section>

          {/* 8. Cancelling Before Delivery */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-semibold">
                8
              </div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Cancelling Before Delivery
              </h2>
            </div>
            <div className="pl-11 space-y-4 text-charcoal-light text-[15px] leading-relaxed">
              <p>
                If you wish to cancel your order before it has been dispatched,
                please contact us as soon as possible. If the goods have not yet
                been dispatched, we will cancel the order and issue a full refund
                within 14 days.
              </p>
              <p>
                If the goods have already been dispatched, you may refuse
                delivery or follow the standard returns process once received.
              </p>
            </div>
          </section>

          {/* 9. Exchanges */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-semibold">
                9
              </div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Exchanges
              </h2>
            </div>
            <div className="pl-11 space-y-4 text-charcoal-light text-[15px] leading-relaxed">
              <p>
                We do not offer direct exchanges. If you would like a different
                item, please return the original item for a refund and place a
                new order. This ensures we can get your replacement to you as
                quickly as possible.
              </p>
            </div>
          </section>

          {/* 10. Sale and Discounted Items */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-semibold">
                10
              </div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Sale &amp; Discounted Items
              </h2>
            </div>
            <div className="pl-11 space-y-4 text-charcoal-light text-[15px] leading-relaxed">
              <p>
                Sale and discounted items carry the same return rights as
                full-price items. Your statutory rights are not affected by any
                promotional pricing.
              </p>
            </div>
          </section>

          {/* Model Cancellation Form */}
          <section className="border-t border-stone/40 pt-12">
            <h2 className="font-display text-2xl font-semibold text-charcoal mb-4">
              Model Cancellation Form
            </h2>
            <div className="bg-cream border border-stone/40 p-6 text-[15px] text-charcoal-light leading-relaxed space-y-3">
              <p className="text-sm italic text-taupe">
                (Complete and return this form only if you wish to withdraw from
                the contract)
              </p>
              <p>
                To: NCF Living, Unit 5, Furniture Park, Newcastle-under-Lyme,
                ST5 1AB
                <br />
                Email:{" "}
                <a
                  href="mailto:returns@ncf.co.uk"
                  className="text-gold-dark hover:underline"
                >
                  returns@ncf.co.uk
                </a>
              </p>
              <p>
                I/We [*] hereby give notice that I/We [*] cancel my/our [*]
                contract of sale of the following goods:
              </p>
              <ul className="text-sm space-y-1 pl-4">
                <li>Order number: _______________</li>
                <li>Ordered on [*] / received on [*]: _______________</li>
                <li>Name of consumer(s): _______________</li>
                <li>Address of consumer(s): _______________</li>
              </ul>
              <p className="text-sm">
                Signature of consumer(s) (only if this form is sent on paper):
                _______________
              </p>
              <p className="text-sm">Date: _______________</p>
              <p className="text-xs text-taupe">[*] Delete as appropriate</p>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-charcoal text-white p-8 sm:p-10">
            <h2 className="font-display text-2xl font-semibold mb-3">
              Need Help with a Return?
            </h2>
            <p className="text-stone-dark text-sm mb-6 max-w-xl">
              Our Customer Care team is here to help Monday to Friday, 9am –
              5pm, and Saturday 10am – 4pm. We aim to respond to all enquiries
              within one working day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:03330154567"
                className="btn-luxury btn-gold text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                0333 015 4567
              </a>
              <a
                href="mailto:returns@ncf.co.uk"
                className="btn-luxury btn-outline text-sm flex items-center gap-2 border-white/30 text-white hover:bg-white hover:text-charcoal"
              >
                <Mail className="w-4 h-4" />
                returns@ncf.co.uk
              </a>
            </div>
          </section>

          {/* Legal note */}
          <div className="text-xs text-taupe leading-relaxed border-t border-stone/40 pt-8">
            <p>
              This returns policy does not affect your statutory rights. For
              more information about your consumer rights, visit the{" "}
              <a
                href="https://www.citizensadvice.org.uk/consumer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-dark hover:underline"
              >
                Citizens Advice
              </a>{" "}
              website or contact your local Trading Standards office.
            </p>
            <p className="mt-2">
              This policy was last updated on 25 February 2026 and applies to
              all orders placed through ncf.co.uk.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Returns;
