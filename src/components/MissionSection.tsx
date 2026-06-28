import React from 'react';
import { 
  Target,  
  Clock,
} from "lucide-react";
function MissionSection(props) {
    return (
        <div>
        <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary rounded-2xl p-8">
              <Target className="w-12 h-12 text-amber mb-4" />
              <h3 className="text-2xl font-bold text-cream mb-4">Our Mission</h3>
              <p className="text-cream/80">
                To provide efficient, reliable, and innovative facility management services through
                skilled professionals, modern technology, and a strong commitment to customer satisfaction.
              </p>
            </div>
            <div className="bg-primary rounded-2xl p-8">
              <Clock className="w-12 h-12 text-amber mb-4" />
              <h3 className="text-2xl font-bold text-cream mb-4">Our Vision</h3>
              <p className="text-cream/80">
                To become a leading and trusted facility management company in Nigeria, known
                for excellence, innovation, and outstanding service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default MissionSection;