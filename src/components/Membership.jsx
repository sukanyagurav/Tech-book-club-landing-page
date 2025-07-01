import Button from './UI/Button';

const membershipOptions = [
  {
    id: 'starter',
    type: 'Starter',
    price: 19,
    priceType: 'month',
    features: [
      {
        name: '1 book/month',
        id: 'feature1_1',
      },
      {
        name: 'Online forums',
        id: 'feature1_2',
      },
    ],
  },
  {
    id: 'pro',
    type: 'Pro',
    price: 29,
    priceType: 'month',
    features: [
      {
        name: '2 books/month',
        id: 'feature2_1',
      },
      {
        name: 'Virtual meetups',
        id: 'feature2_2',
      },
    ],
  },
  {
    id: 'enterprise',
    type: 'Enterprise',
    priceType: 'Custom',
    features: [
      {
        name: 'Team access',
        id: 'feature3_1',
      },
      {
        name: 'Private sessions',
        id: 'feature3_2',
      },
    ],
  },
];
const Membership = () => {
  return (
    <section className="my-28">
      <h2 className="text-center heading text-bold text-[2.5rem] mb-16">
        Membership options
      </h2>
      <ul className="flex flex-col   md:flex-row gap-8">
        {membershipOptions.map((membership) => (
          <li className={`w-[340px] md:flex-[30%]  p-6 border rounded-lg ${membership.type == 'Pro' ? 'lightsalmongradient self-center md:self-auto' :' my-6 self-center' }`}>
            <h3 className="text-2xl font-bold">{membership.type}</h3>
            <p className="py-4 border-b-2">
              {membership.priceType == 'month' ? (
                <>
                  <span className="font-bold text-2xl  inline-block">
                    ${membership.price}
                  </span>
                  /{membership.priceType}
                </>
              ) : (
                <span className='font-bold text-2xl'>{membership.priceType}</span>
              )}
            </p>
            <ul className="my-8 text-xl ">
              {membership.features.map((feature) => (
                <li
                  key={feature.id}
                  className="flex gap-2 mb-5 items-start"
                >
                  <img src="./assets/images/icon-check.svg" />
                  {feature.name}
                </li>
              ))}
            </ul>
            <Button classes={'w-full text-center'}>Subscribe Now</Button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Membership;
