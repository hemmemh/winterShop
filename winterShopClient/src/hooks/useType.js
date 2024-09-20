import { createType } from '@/http/typesApi';

export default async function useBrand(name, file) {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('image', file);
  await createType(formData);
}
