import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.math.BigInteger;
import java.util.Scanner;

public class FibMod {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner sc = new Scanner(System.in);
        int t1 = sc.nextInt();
        int t2 = sc.nextInt();
        int n  = sc.nextInt();
        BigInteger[] f = new BigInteger[n+2];
        f[1] = new BigInteger(Integer.toString(t1));
        f[2] = new BigInteger(Integer.toString(t2));
        for (int i=3; i<=n; i++) {
            f[i] = f[i-2].add(f[i-1].multiply(f[i-1]));
        }
        System.out.println(f[n]);

    }
}
