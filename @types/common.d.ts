interface UseQueryProps {
  onSuccess?: ({ data }: any) => void;
  enabled?: boolean;
  queryKey?: string[];
}
