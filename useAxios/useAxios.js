import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  if (!opts.url) return;
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
      data: null
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data: data
        });
      })
      .catch((error) => {
        console.log(error);
        setState({
          ...state,
          lading: false,
          error
        });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;
