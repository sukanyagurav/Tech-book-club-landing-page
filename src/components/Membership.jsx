import Card from './Card';
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
    <section className="my-28" id="membership">
      <h2 className="text-center subHeading mb-16">
        Membership options
      </h2>
      <ul className="flex flex-col   md:flex-row gap-8">
        {membershipOptions.map((membership) => (
          <Card membership={membership} key={membership.id}/>
        ))}
      </ul>
    </section>
  );
};

export default Membership;
