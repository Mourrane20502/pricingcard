import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import formatterNumber from "@/lib/formatterNumber";
import { animated, useSpring } from "@react-spring/web";
import { ChevronRight } from "lucide-react";
import Feature from "./Feature";

export default function PricingCard({
  name,
  price,
  duration,
  visitors,
  canUpgrade,
  canAccessAnalytics,
  canCreateProjects,
  canAddUsers,
  canAccessSupport,
  canExportData,
  canAccessAllFeatures,
  canHandlePayment,
  discount,
}: {
  name: string;
  price: number;
  duration: string;
  visitors: number;
  canUpgrade: boolean;
  canAccessAnalytics: boolean;
  canCreateProjects: boolean;
  canAddUsers: boolean;
  canAccessSupport: boolean;
  canExportData: boolean;
  canAccessAllFeatures: boolean;
  canHandlePayment: boolean;
  discount: boolean;
}) {
  const isMostPopular = name === "Standard Plan";
  const discountedPrice = discount ? price * 0.9 : price;

  const { number } = useSpring({
    from: { number: price },
    to: { number: discountedPrice },
    config: { tension: 1000, friction: 70, duration: 500 },
  });

  return (
    <Card
      className={`border ${
        isMostPopular ? "border-black border-2" : "border-gray-300"
      } rounded-lg shadow-md relative flex flex-col h-full`}
    >
      {isMostPopular && (
        <div className="bg-black max-md:px-3 text-white rounded-md px-5 absolute top-0 right-0 text-center py-2">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription>
          {formatterNumber(visitors)} people currently subscribed
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <h2 className="text-5xl ">
          $<animated.span>{number.to((n) => `${n.toFixed(2)}`)}</animated.span>
        </h2>
        <p className="text-lg mt-2">{duration}</p>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-2 justify-end mt-auto">
        {canUpgrade && <Feature>Can Upgrade</Feature>}
        {canAccessAnalytics && <Feature>Can Access Analytics</Feature>}
        {canCreateProjects && <Feature>Can Create Projects</Feature>}
        {canAddUsers && <Feature>Can Add Users</Feature>}
        {canAccessSupport && <Feature>Can Access Support</Feature>}
        {canExportData && <Feature>Can Export Data</Feature>}
        {canAccessAllFeatures && <Feature>Can Access All Features</Feature>}
        {canHandlePayment && <Feature>Can Handle Payment</Feature>}

        <Button
          className={`${
            isMostPopular
              ? "bg-gradient-to-r from-red-600 via-red-400 to-red-500 hover:from-red-500 hover:via-red-300 hover:to-red-400"
              : "bg-black"
          } cursor-pointer text-white text-md mt-10 w-full py-6 transition-all duration-300 ease-in-out transform hover:scale-105`}
        >
          Subscribe Now <ChevronRight size={24} />
        </Button>
      </CardFooter>
    </Card>
  );
}
