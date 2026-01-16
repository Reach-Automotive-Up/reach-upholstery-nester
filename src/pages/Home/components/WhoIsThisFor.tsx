const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Upholstery Nester For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Upholstery Nester is ideal wherever upholstery parts are cut from
          expensive fabrics, leather, or technical textiles and material wastage
          must be tightly controlled.
        </p>

        {/* Upholstered furniture manufacturers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Upholstered furniture manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Sofa, recliner, armchair, and sectional manufacturers where fabric
              and leather are a major cost component in each product.
            </li>
            <li>
              Plants running large cut volumes that need automated nesting to
              consistently maximize yield across many styles and sizes.
            </li>
          </ul>
        </div>

        {/* Automotive and transport seating */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Automotive and transport seating manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              OEM and tier-1 suppliers producing car, bus, truck, rail, and
              aircraft seats with complex cover patterns in fabric, leather, and
              synthetics.
            </li>
            <li>
              Units that must balance strict quality zones on leather with
              minimal trim loss across high-volume seating programs.
            </li>
          </ul>
        </div>

        {/* Marine, aviation, specialty */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Marine, aviation, and specialty upholstery shops
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Producers of boat/yacht interiors, aircraft seating, and specialty
              commercial seating using premium fabrics and leathers.
            </li>
            <li>
              Workshops where small percentage savings per hide or roll
              significantly improve margins on high-value contracts.
            </li>
          </ul>
        </div>

        {/* Contract upholstery */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Contract upholstery and re-upholstery studios
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Studios handling hotel, cinema, office, and restaurant seating
              where many similar items are cut from common materials.
            </li>
            <li>
              Re-upholstery businesses that need efficient nesting on irregular
              offcuts and remnants while maintaining quality and matching.
            </li>
          </ul>
        </div>

        {/* Foam manufacturers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Foam and cushioning manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Companies cutting foam cushions, backs, armrests, and mattress
              cores for upholstered products that need optimal nesting on foam
              sheets or blocks.
            </li>
            <li>
              Suppliers combining fabric/leather nesting with foam nesting to
              offer complete, cost-optimized upholstery kits.
            </li>
          </ul>
        </div>

        {/* Training centres */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Training centres and common facility centres
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Upholstery, automotive interior, and furniture training institutes
              that demonstrate modern AI-based nesting and material optimization
              practices.
            </li>
            <li>
              Government/cluster common facility centres providing shared
              cutting and nesting services to MSME upholstery units.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
