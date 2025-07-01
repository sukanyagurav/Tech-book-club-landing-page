import React from 'react'
const journeySteps=[
    {
        id:1,
        text:'Choose your membership tier'
    },{
        id:2,
        text:'Get your monthly book selection'
    },{
        id:3,
        text:'Join our discussion forums',
    },{
        id:4,
        text:'Attend exclusive meetups'
    }
]
const TechJourney = () => {
  return (
    <section className='mt-28 p-6 md:p-12 bg-[url(./assets/images/pattern-light-bg.svg)] rounded-4xl py-16 lightsalmongradient'>
      <h2 className=' text-center subHeading'>Your tech <br/> reading journey</h2>
        <ul className='mt-20 text-xl flex md:flex-row  gap-8 justify-between flex-col  ' >
            {journeySteps.map(journey=>(
                <li key={journey.id} className='mb-8 journey relative flex md:flex-col  font-semibold md:max-w-[20%]'><span className='inline-flex items-center justify-center mr-4 p-2 w-[34px] h-[34px] text-center mb-3 border-2 rounded-lg '>{journey.id}</span>{journey.text}</li>
            ))}
        </ul>
    </section>
  )
}

export default TechJourney
