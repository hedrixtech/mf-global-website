import { useLocation } from "react-router-dom";
import PaymentForm from "./PaymentForm";

const plans = {
  basic: {
    name: "الباقة الأساسية",
    amount: 2.99,
    credits: "10,500",
    bonus: "2,500",
    highlight: false,
  },
  standard: {
    name: "الباقة القياسية",
    amount: 3.99,
    credits: "14,000",
    bonus: "3,000",
    highlight: false,
  },
  epic: {
    name: "الباقة الملحمية",
    amount: 5.99,
    credits: "21,000",
    bonus: "4,000",
    highlight: false,
  },
  royal: {
    name: "الباقة الملكية",
    amount: 9.99,
    credits: "35,000",
    bonus: "7,500",
    highlight: true,
  },
};


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Pay = () => {
  const query = useQuery();


  const handleSuccess = (details: any) => {
    // handle payment success here
    console.log("Payment successful:", details);
  };

const planKey = query.get("plan") as keyof typeof plans | null;
const planFromRoute = planKey && plans[planKey] ? plans[planKey] : null;



  return (
    <PaymentForm
      onPaymentSuccess={handleSuccess}
      planFromRoute={planFromRoute}
      fixedAmount={planFromRoute?.amount}
      fixedPlanName={planFromRoute?.name}
      allowAmountEdit={!planFromRoute} // only allow amount edit if no fixed plan
    />
  );
};

export default Pay;
