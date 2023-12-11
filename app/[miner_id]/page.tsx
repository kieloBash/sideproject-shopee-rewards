"use client";
import useFetchMiner from "@/hooks/useMinersSearch";
import React from "react";

// UI
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const RewardsPage = ({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const miner = useFetchMiner({ id: params.miner_id as string });
  return (
    <section className="flex-1 flex-col flex justify-center items-center bg-gradient-to-r from-pink-300 to-rose-300">
      <Card className="sm:max-w-[425px] max-w-[360px] py-4">
        <CardHeader>
          <CardTitle>{miner.data?.name}</CardTitle>
          <CardDescription>
            This is your reward points. Mine away at our live to collect rewards
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full flex justify-center items-center flex-col gap-4">
          <Label className="text-xl text-center">Reward Points</Label>
          <p className="text-8xl font-black bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            {miner.data?.rewardpts}
          </p>
        </CardContent>
        <CardFooter className="w-full flex flex-col">
          <div className="w-full flex flex-col gap-y-1.5">
            <Progress
              value={miner.data?.rewardpts}
              className="w-full h-5 shadow"
            />
            <div className="w-full grid grid-cols-10 h-2">
              {Array(10)
                .fill([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
                .map((_, i) => {
                  return (
                    <div
                      className="text-xs text-muted-foreground text-right"
                      key={i}
                    >
                      {_[i]}
                    </div>
                  );
                })}
            </div>
          </div>
        </CardFooter>
      </Card>
      <div className="w-full flex justify-center items-center mt-6 gap-4">
        {miner?.data?.liked ? (
          <>
            <Badge className="border-main-500 bg-white text-main-default text-xs text-left w-[10rem] flex justify-center items-center">
              <div className="mr-2 w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-check w-full h-full"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              Like our <br />
              Facebook page
            </Badge>
          </>
        ) : (
          <>
            <Link
              href={"https://www.facebook.com/stylizboutique"}
              target="_blank"
            >
              <Badge className="bg-main-500 text-xs text-center w-[10rem] flex justify-center items-center">
                Like our <br />
                Facebook page + 5 pts
              </Badge>
            </Link>
          </>
        )}
        {miner?.data?.shared ? (
          <>
            <Badge className="border-main-500 bg-white text-main-default text-xs text-left w-[10rem] flex justify-center items-center">
              <div className="mr-2 w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-check w-full h-full"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              Share our <br />
              Facebook page
            </Badge>
          </>
        ) : (
          <>
            <Link
              href={"https://www.facebook.com/stylizboutique"}
              target="_blank"
            >
              <Badge className="bg-main-500 text-xs text-center w-[10rem] flex justify-center items-center">
                Share our <br />
                Facebook page + 5 pts
              </Badge>
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default RewardsPage;
