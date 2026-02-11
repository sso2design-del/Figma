import { useNavigate } from "react-router";
import { InsightList } from "../components/insight/InsightList";

export default function InsightListPage() {
  const navigate = useNavigate();

  const handleViewInsight = (postId: number) => {
    navigate(`/insight/${postId}`);
  };

  return <InsightList onViewInsight={handleViewInsight} />;
}
