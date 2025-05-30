import { useState, useEffect } from "react";

interface S3FetchReturn {
  content: string;
  error: Error | null;
  loading: boolean;
}

export const useS3Fetch = (url: string): S3FetchReturn => {
  const [content, setContent] = useState("");
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFile = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err as Error);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchFile();
    }
  }, [url]);

  return { content, error, loading };
};
