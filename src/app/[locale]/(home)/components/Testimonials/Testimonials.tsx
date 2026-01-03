// Components
import TitleSection from "@/components/common/TitleSection";
import TestimonialCard from "./TestimonialCard";

// Constants
import { TestimonialsArray } from "@/constants";

export const Testimonials = () => {
  return (
    <section className="section-container">
      <TitleSection translationNamespace="Sections.Testimonials" bgImage={3} />

      <ul className="grid grid-cols-1 md:grid-cols-2">
        {TestimonialsArray.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </ul>
    </section>
  );
};
