import{useState} from "react"
function Price(){
    const[bill,setbill]=useState("monthly")
   const pricingdata = {
  monthly: [
    {
      id: 1,
      name: "Starter",
      price: 9,
      currency: "$",
      billing: "month",
      popular: false,
      description: "Perfect for freelancers and individuals getting started.",
      features: [
        "Up to 5 Projects",
        "10 GB Storage",
        "Basic Analytics",
        "Email Support",
        "Single User Access",
      ],
      buttonText: "Start Free Trial",
    },
    {
      id: 2,
      name: "Professional",
      price: 29,
      currency: "$",
      billing: "month",
      popular: true,
      description:
        "Best for growing teams that need advanced collaboration tools.",
      features: [
        "Unlimited Projects",
        "100 GB Storage",
        "Advanced Analytics",
        "Priority Email Support",
        "Up to 10 Team Members",
        "Custom Integrations",
      ],
      buttonText: "Get Started",
    },
    {
      id: 3,
      name: "Enterprise",
      price: 99,
      currency: "$",
      billing: "month",
      popular: false,
      description:
        "Advanced security and scalability for large organizations.",
      features: [
        "Unlimited Projects",
        "1 TB Storage",
        "Advanced Analytics",
        "Dedicated Account Manager",
        "Unlimited Team Members",
        "Custom API Access",
        "24/7 Premium Support",
      ],
      buttonText: "Contact Sales",
    },
  ],

  yearly: [
    {
      id: 1,
      name: "Starter",
      price: 90,
      currency: "$",
      billing: "year",
      popular: false,
      description: "Perfect for freelancers and individuals getting started.",
      features: [
        "Up to 5 Projects",
        "10 GB Storage",
        "Basic Analytics",
        "Email Support",
        "Single User Access",
      ],
      buttonText: "Start Free Trial",
      savings: "Save 17%",
    },
    {
      id: 2,
      name: "Professional",
      price: 290,
      currency: "$",
      billing: "year",
      popular: true,
      description:
        "Best for growing teams that need advanced collaboration tools.",
      features: [
        "Unlimited Projects",
        "100 GB Storage",
        "Advanced Analytics",
        "Priority Email Support",
        "Up to 10 Team Members",
        "Custom Integrations",
      ],
      buttonText: "Get Started",
      savings: "Save 17%",
    },
    {
      id: 3,
      name: "Enterprise",
      price: 990,
      currency: "$",
      billing: "year",
      popular: false,
      description:
        "Advanced security and scalability for large organizations.",
      features: [
        "Unlimited Projects",
        "1 TB Storage",
        "Advanced Analytics",
        "Dedicated Account Manager",
        "Unlimited Team Members",
        "Custom API Access",
        "24/7 Premium Support",
      ],
      buttonText: "Contact Sales",
      savings: "Save 17%",
    },
  ],
};

  return (
    <div>
        <p>lorem ipsum</p>
        <h1>Donec lacinia turpis non </h1>
        <h1>sapien lobortis pretium</h1>
        <p>integer feugiat massa sapien,vitae tristique metus suscript nec</p>
        <div>{bill==="monthly"?"text-blue-700":"text-gray-500"}monthly</div>
        <button onClick={()=>setbill(bill==="monthly"?"year":"monthly")}>monthly</button>
        {pricingdata.monthly.map((plan)=>(
            <div key={plan.currency}>
                <h1>{plan.currency}{plan.price}/mo</h1>
                <p style={{gap:5}}>{plan.features}</p>
                <button>selectplan</button>
                
            </div>
        ))}
    </div>
    
  )
}
export default Price;