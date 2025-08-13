import datetime
import pyttsx3 #pip install pyttsx3
import speech_recognition


engine = pyttsx3.init("sapi5")
voices = engine.getProperty("voices")
engine.setProperty("voice",voices[1].id)
engine.setProperty("rate",170)

def speak(text):
    engine.say(text)
    engine.runAndWait()
    

x = 0
while x <= 10: 
  command = input("command prompt:")
  command = command.lower().strip()
  
  if command == "wake up":
        speak("Hello mam! Please tell me, how can I help you?")
  elif command == "what's your name":
        speak("My name is Jennifer, created by Tanya mam!")
  elif command == "how are you":
        speak("I am doing great, mam! Thank you for asking. How are you?")
    
  elif command == "tell me a joke":
       speak("Why don't skeletons fight each other? Because they don't have the guts! Ha ha ha!")
    
  elif command == "tell me a quote":
        speak("Believe you can and you're halfway there.")
    
  elif command == "who created you":
        speak("I was created by Tanya mam, the best developer ever!")
    
  elif command == "good morning":
        speak("Good morning mam! I hope your day is as bright as your smile!")
    
  elif command == "good night":
        speak("Good night mam! Sweet dreams and rest well.")
    
  elif command == "motivate me":
        speak("Mam, you are capable of achieving anything you set your mind to. Keep going!")
    
  elif command == "stop":
        speak("Alright mam, shutting down my conversation mode. Goodbye!")
    
  else:
        speak("Sorry mam, I didn't understand that command. Could you please repeat?")