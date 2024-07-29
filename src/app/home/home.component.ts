import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  messages: { text: string; isUser: boolean }[] = [];
  userInput = '';

  constructor(private chatService: ChatService) { }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, isUser: true });
      this.chatService.sendMessage(this.userInput).subscribe({
        next: (response) => {
          this.messages.push({ text: response.reply, isUser: false });
        },
        error: (error) => {
          console.error('Error:', error);
          this.messages.push({ text: 'An error occurred while processing your request.', isUser: false });
        }
      });
      this.userInput = '';
    }
  }
}
