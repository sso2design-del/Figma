import { useParams, useNavigate } from "react-router";
import { InsightDetail } from "../components/insight/InsightDetail";

export default function InsightDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/insight");
  };

  return <InsightDetail postId={parseInt(id || "1")} onBack={handleBack} />;
}
