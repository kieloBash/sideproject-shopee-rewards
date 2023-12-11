"use client";

import { MinerType } from "@/lib/interfaces/new.interface";
import supabase from "@/utils/supabase";
import { useQuery } from "@tanstack/react-query";

const useFetchMiner = ({ id }: { id: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: [`miner`],
    queryFn: async () => {
      let supabaseQuery = supabase
        .from("miner")
        .select("*")
        .eq("id", id)
        .single();

      const { data: miner, error } = await supabaseQuery;

      return miner as MinerType;
    },
    enabled: id !== "",
  });

  return { data, isLoading };
};

export default useFetchMiner;
