/*
 * BFS
 */

#include<bits/stdc++.h>
using namespace std;

void flip(char& c) {
    c =  (c=='1') ? '0' : '1'; 
}

int main() {
    //freopen("inp.txt","r",stdin);
    int tcase;
    cin >> tcase;
    
    unordered_map<string, int> dist;
    for (int i=0;i<=512;i++) {
        bitset<9> temp(i);
        dist.insert(pair<string, int>(temp.to_string(),-1));
        
    }
    
    while (tcase--) {
        string B(""), A("000000000");
        for (int i=0;i<3;i++) {
            char temp[3];
            cin >> temp;
            for (int j=0;j<3;j++)
                B += (temp[j] == '*') ? "1" : "0";
            
        }
        
        queue<string> q;
        q.push(A);
        dist[A] = 0;
        
        while (!q.empty()) {
            string u = q.front(); q.pop();
            
            for (int i=0;u[i];i++) {
                string v(u);
                flip(v[i]);
                switch (i) {
                    case 0: flip(v[1]);flip(v[3]);break;
                    case 1: flip(v[0]);flip(v[2]);flip(v[4]);break;
                    case 2: flip(v[1]);flip(v[5]);break;
                    case 3: flip(v[0]);flip(v[4]);flip(v[6]);break;
                    case 4: flip(v[1]);flip(v[3]);flip(v[5]);flip(v[7]);break;
                    case 5: flip(v[2]);flip(v[4]);flip(v[8]);break;
                    case 6: flip(v[3]);flip(v[7]);break;
                    case 7: flip(v[4]);flip(v[6]);flip(v[8]);break;
                    case 8: flip(v[5]);flip(v[7]);break;
                    default: break;
                        
                }
                if (dist[v] == -1) {
                    q.push(v);
                    dist[v] = 1 + dist[u];
                }
            }
        }
        cout << dist[B] << endl;    
    }
    
    return 0;
}
