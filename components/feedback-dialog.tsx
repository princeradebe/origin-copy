import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function FeedbackDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-sm">
          Feedback
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>GRC System Feedback</DialogTitle>
          <DialogDescription>
            Help us improve the GRC system. Your feedback is valuable for enhancing governance, 
            risk management, and compliance processes. Contact our{" "}
            <a className="text-foreground hover:underline" href="#">
              support team
            </a>{" "}
            for urgent matters or join our{" "}
            <a className="text-foreground hover:underline" href="#">
              user community
            </a>{" "}
            for discussions.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-5">
          <Textarea
            id="feedback"
            placeholder="Share your thoughts on GRC functionality, usability, or feature requests..."
            aria-label="Send GRC feedback"
            rows={4}
          />
          <div className="flex flex-col sm:flex-row sm:justify-end">
            <Button type="button">Send Feedback</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}