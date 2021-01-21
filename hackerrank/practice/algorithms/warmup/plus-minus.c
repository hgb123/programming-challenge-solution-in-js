#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int main(){
    int n,i,a[100];
    float dp=0,dn=0,dz=0;
    scanf("%d",&n);
    for (i=0;i<n;i++){
        scanf("%d",&a[i]);
        if (a[i]>0) dp++;
        else
            if (a[i]==0) dz++;
            else dn++;
    }
    dp /= n;dn /= n;dz /= n;
    printf("%.6f\n%.6f\n%.6f",dp,dn,dz);
    return 0;
}
