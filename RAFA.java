import java.util.ArrayList;
import java.util.Scanner;


class RAFA {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String [] legParts = new String [9];
        String [] feetParts = new String [8];
        String finalPart = "";
        String side = "";

        legParts [0] = "knee";
        legParts [1] = "calf";
        legParts [2] = "thigh";
        legParts [3] = "glute";
        legParts [4] = "hip";
        legParts [5] = "hamstring tendon";
        legParts [6] = "hamstring muscle";
        legParts [7] = "achilles tendon";
        legParts [8] = "other";

        feetParts [0] = "toenail";
        feetParts [1] = "toe";
        feetParts [2] = "arch";
        feetParts [3] = "sole";
        feetParts [4] = "heel";
        feetParts [5] = "ankle";
        feetParts [6] = "bridge";
        feetParts [7] = "ball";

        System.out.println("What part of your body is injured?");
        System.out.println("legs");
        System.out.println("feet");
        String p1 = sc.nextLine();
        if (p1.equals("legs")||p1.equals("Legs")){
            while (true){
                System.out.println("What part of your body is injured?");
                String p2 = sc.nextLine();
                boolean b = false;
                for(int i = 0; i < legParts.length; i++){
                    if (p2.equals(legParts[i])){
                        b = true;
                        finalPart = p2;
                        side = checkSide(finalPart);
                        legSymptoms(finalPart);
                        break;
                    }
                }
                if (b==false){
                    System.out.println("Please enter a valid body part");
                }
                else {
                    break;
                }
            }
        }
        else if (p1.equals("feet")||p1.equals("Feet")){
            
        }
        else{
            System.out.println("Please enter a valid body part");
        }
    }

    public static String checkSide(String finalPart){
        while(true){
            Scanner sc = new Scanner(System.in);
            System.out.println("Which "+finalPart+" hurts?");
            System.out.println("left");
            System.out.println("right");
            System.out.println("both");
            String s = sc.nextLine();
            if (s.equals("left")||s.equals("right")||s.equals("both")){
                return s;
            }
            System.out.println("please enter a valid answer");
        }
    }

    public static void legSymptoms(String finalPart){
        ArrayList<String> symptoms = new ArrayList<String>();
        Scanner sc = new Scanner(System.in);
        System.out.println("Is your "+finalPart+" stiff?");
        String s1 = sc.nextLine();
        if (s1.equals("yes")){
            symptoms.add("stiffness");
        }
        System.out.println(symptoms);
    }

    public void footSymptoms(){
        
    }
}