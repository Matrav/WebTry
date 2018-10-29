package hw1q4;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.io.BufferedWriter;
import java.io.FileWriter;


public class hw1q4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String fileName = "hw1q4JAVA.html";
		
		BufferedWriter bw = null;
		FileWriter fw = null;
		try {
			fw = new FileWriter(fileName);
		} catch (IOException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
		bw = new BufferedWriter(fw);
		
		
		 StringBuilder sb = new StringBuilder();
		    sb.append("<html>");
		    sb.append("<head>");
		    sb.append("</head>");
		    sb.append("<body>");	
		
		int size = 0;
		while(size < 1 || size > 50)
		{
		System.out.println("please pick a number between 1-50");
		
		 BufferedReader bufferRead = new BufferedReader(new InputStreamReader(System.in));
	     String s ="";
		try {
			s = bufferRead.readLine();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    size = Integer.parseInt(s);
		}
		float percentage = (float)(100/size);
		System.out.println(" this is the calc: " + percentage);
	int colorCounter=0;
	for ( int i=0;i<size;i++)
	{
		if(colorCounter==0)
		{
			 sb.append(" <div style=\"width:"+ percentage +"%;\n" + 
			 		"			  float:right;\n" + 
			 		"			  height: 100%;\n" + 
			 		"			  background-color: red;\"\n" + 
			 		"			  >\n" + 
			 		"			  </div>");
		}
		if(colorCounter==1)
		{
			sb.append("	 <div style=\"width: "+ percentage +"%;\n" + 
					"					  float:right;\n" + 
					"					  height: 100%;\n" + 
					"					  background-color: blue;\"\n" + 
					"					  >\n" + 
					"					  </div>");
		
		}
		if(colorCounter==2)
		{
			sb.append("<div style=\"width:" + percentage +"%;\n" + 
					"					  float:right;\n" + 
					"					  height: 100%;\n" + 
					"					  background-color: green;\"\n" + 
					"					  >\n" + 
					"					  </div>");
			
		}
		
		colorCounter++;
		colorCounter=colorCounter%3;
	}
	
	   sb.append("</body>");
	   sb.append("</html>");
	try {
		bw.write(sb.toString());
		bw.flush();
		bw.close();
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}
}
