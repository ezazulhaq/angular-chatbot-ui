import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  messages: { text: string; isUser: boolean }[] = [];
  userInput = '';

  constructor(private chatService: ChatService) { }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, isUser: true });
      this.chatService.sendMessage(this.userInput).subscribe(
        (response) => {
          this.messages.push({ text: response.reply, isUser: false });
        },
        (error) => {
          console.error('Error:', error);
          this.messages.push({ text: 'An error occurred while processing your request.', isUser: false });
        }
      );
      this.userInput = '';
    }
  }
}
