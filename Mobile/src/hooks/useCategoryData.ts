import { useState, useEffect } from 'react';
import { url } from './apiRequest/url';
interface ItemType {
  label: string;
  value: any;
}
const useCategoryData = () => {
  const [data, setData] = useState<ItemType[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch(`${url}/category`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      if (Array.isArray(result.data)) {
        const formattedData: ItemType[] = (result.data || []).map((item:any) => ({
          label: item.name,
          value: item._id ? item._id.toString() : '',
        }));
        setData(formattedData);
      } else {
        console.error('Invalid data format:', result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data;
};
export default useCategoryData;
