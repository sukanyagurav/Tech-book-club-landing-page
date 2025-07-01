import Button from "./UI/Button"

const Card = ({membership}) => {
  return (
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
                  className="flex gap-2 mb-7 items-start"
                >
                  <img src="./assets/images/icon-check.svg" />
                  {feature.name}
                </li>
              ))}
            </ul>
            <Button classes={'w-full text-center'}>Subscribe Now</Button>
          </li>
  )
}

export default Card
