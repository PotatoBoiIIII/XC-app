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
                        legSymptoms(finalPart,side);
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
            while (true){
                System.out.println("What part of your body is injured?");
                String p2 = sc.nextLine();
                boolean b = false;
                for(int i = 0; i < feetParts.length; i++){
                    if (p2.equals(feetParts[i])){
                        b = true;
                        finalPart = p2;
                        side = checkSide(finalPart);
                        footSymptoms(finalPart,side);
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

    public static void legSymptoms(String finalPart,String side){
        ArrayList<String> symptoms = new ArrayList<String>();
        Scanner sc = new Scanner(System.in);
        System.out.println("Is your "+finalPart+" stiff?");
        String s1 = sc.nextLine();
        if (s1.equals("yes")){
            symptoms.add("stiffness");
        }
        System.out.println("Is your "+finalPart+" swelling?");
        String s2 = sc.nextLine();
        if (s2.equals("yes")){
            symptoms.add("swelling");
        }
        System.out.println("Is your "+finalPart+" in pain?");
        String s3 = sc.nextLine();
        if (s3.equals("yes")){
            System.out.println("How much pain is it in? (1-10)");
            int i1 = sc.nextInt();
            String p = sc.nextLine();
            String n = i1+"";
            symptoms.add("pain - "+n);
        }
        System.out.println("Does your "+finalPart+" have problems bending or a decreased range of motion?");
        String s4 = sc.nextLine();
        if (s4.equals("yes")){
            symptoms.add("problems bending/decreased range of motion");
        }
        System.out.println("Is your "+finalPart+" bruised?");
        String s5 = sc.nextLine();
        if (s5.equals("yes")){
            symptoms.add("bruising");
        }
        System.out.println("Is your "+finalPart+" sore?");
        String s6 = sc.nextLine();
        if (s6.equals("yes")){
            System.out.println("How sore is it? (1-10)");
            int i2 = sc.nextInt();
            String p1 = sc.nextLine();
            String n1 = i2+"";
            symptoms.add("Soreness - "+n1);
        }
        System.out.println("Has the skin around your "+finalPart+" changed color?");
        String s7 = sc.nextLine();
        if (s7.equals("yes")){
            symptoms.add("color change");
        }
        System.out.println(side+" "+finalPart);
        System.out.println(symptoms);
    }

    public static void footSymptoms(String finalPart, String side){
        ArrayList<String> symptoms = new ArrayList<String>();
        Scanner sc = new Scanner(System.in);
        System.out.println("Is your "+finalPart+" in pain?");
        String s1 = sc.nextLine();
        if (s1.equals("yes")){
            System.out.println("How much pain is it in? (1-10)");
            int i1 = sc.nextInt();
            String p = sc.nextLine();
            String n = i1+"";
            symptoms.add("pain - "+n);
        }
        System.out.println("Is your "+finalPart+" sore?");
        String s2 = sc.nextLine();
        if (s2.equals("yes")){
            System.out.println("How sore is it? (1-10)");
            int i1 = sc.nextInt();
            String p = sc.nextLine();
            String n = i1+"";
            symptoms.add("soreness - "+n);
        }
        System.out.println("Do you have trouble bending your "+finalPart+"?");
        String s3 = sc.nextLine();
        if (s3.equals("yes")){
            symptoms.add("trouble bending");
        }
        System.out.println("Is your "+finalPart+" numb?");
        String s4 = sc.nextLine();
        if (s4.equals("yes")){
            symptoms.add("numbness");
        }
        System.out.println("Is your "+finalPart+" swelling?");
        String s5 = sc.nextLine();
        if (s5.equals("yes")){
            symptoms.add("swelling");
        }
        System.out.println("Is your "+finalPart+" stiff?");
        String s6 = sc.nextLine();
        if (s6.equals("yes")){
            symptoms.add("stiffness");
        }
        System.out.println(side+" "+finalPart);
        System.out.println(symptoms);
    }
}