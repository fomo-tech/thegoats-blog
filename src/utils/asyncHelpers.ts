export async function handleSubmitWithErrorHandling<T>(
    asyncFn: () => Promise<T>,
    onError: (error: Error) => void,
    setLoading?: (loading: boolean) => void
  ): Promise<T | undefined> {
    try {
      setLoading?.(true);
      const result = await asyncFn();
      return result;
    } catch (err: unknown) {
      if (err instanceof Error) {
        onError(err);
      } else {
        onError(new Error('Unknown error'));
      }
    } finally {
      setLoading?.(false);
    }
  }
  