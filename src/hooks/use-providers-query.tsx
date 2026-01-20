import { useProvidersQuery } from "@/services/providers/actions";
import type { ProviderFilterKey } from "@/services/providers/types";
import type { RequestParams } from "@/services/types";
import type { ProviderProps } from "@/types/cards";

type CardsProps = {
  params: RequestParams<Record<ProviderFilterKey, number | undefined>>;
};

export const Providers = ({ params }: CardsProps) => {
  const { data, error, isError, isLoading } = useProvidersQuery({ params });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error instanceof Error ? error.message : "Unknown error"}</div>;
  }
  const providers = data?.data;

  return (
    <div>
      {providers?.map((provider: ProviderProps) => {
        return <li key={provider.id}>{provider.clinics[0].name}</li>;
      })}
    </div>
  );
  // return (
  //   { data, error, isError, isLoading }
};

//   const [providers, setProviders] = useState<ProviderProps[]>([]);
// //   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   const match = useMatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const controller = new AbortController();
//     axios
//       .get("http://localhost:8080/api/providers/1")
//       .then((res) => {
//         setTimeout(() => {
//           if (Array.isArray(res.data)) {
//             setProviders(res.data);
//           } else if (res.data && Array.isArray(res.data.providers)) {
//             setProviders(res.data.providers);
//           } else if (res.data && Array.isArray(res.data.data)) {
//             setProviders(res.data.data);
//           } else {
//             setError("Invalid response format");
//           }
//           setLoading(false);
//         }, 2000);
//       })
//       .catch((err) => {
//         if (err.name !== "CanceledError") {
//           setError("Error loading providers");
//           setLoading(false);
//         }
//       });

//     return () => {
//       controller.abort();
//     };
//   }, []);

//   const filteredProviders = providers.filter((provider) => {
//     const matchSpecialty =
//       !filters.Specialty || filters.Specialty === "All specialties"
//         ? true
//         : provider.specialty.name === filters.Specialty;

//     const matchGender =
//       !filters.Gender || filters.Gender === "All genders"
//         ? true
//         : provider.gender.toLowerCase() === filters.Gender.toLowerCase();

//     const matchClinic =
//       !filters.Clinic || filters.Clinic === "All clinics"
//         ? true
//         : provider.clinics.some((clinic) => {
//             return clinic.name === filters.Clinic;
//           });

//     const search = filters.search.trim().toLowerCase();
//     const matchSearch =
//       !search ||
//       provider.name.toLowerCase().includes(search) ||
//       provider.name.toLowerCase() == search;

//     return matchSpecialty && matchGender && matchClinic && matchSearch;
//   });

//   const countProviders = filteredProviders.length;

//   return { providers: filteredProviders, loading, error, countProviders };
