package dev.tobiadegbuji.diaryappbackend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class JwtCreator {


    String key = "SecuritySecuritySecuritySecuritySecuritySecuritySecuritySecurity";

    public String generateToken(Authentication authentication){

        User user = (User) authentication.getPrincipal();

        String token = Jwts.builder()
                .setSubject(user.getUsername())
                .claim("authorities", user.getAuthorities())
                .setIssuedAt(new Date())
                .setExpiration(java.sql.Date.valueOf(LocalDate.now().plusWeeks(2)))
                .signWith(Keys.hmacShaKeyFor(key.getBytes()))
                .compact();

//        response.addHeader("Authorization", "Bearer " + token);
        return token;
    }

    public boolean validateToken(String token){
        //If executed without any errors it will return true meaning the token is validated
    Jwts.parser()
                .setSigningKey(Keys.hmacShaKeyFor(key.getBytes()))
                .parseClaimsJws(token);
        return true;
    }

    //Grabs username from the body of the token
    public String getUsernameFromToken(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(Keys.hmacShaKeyFor(key.getBytes()))
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();

    }

    public Set<SimpleGrantedAuthority> getAuthoritiesFromToken(String token){
        var claims = Jwts.parser()
                .setSigningKey(Keys.hmacShaKeyFor(key.getBytes()))
                .parseClaimsJws(token)
                .getBody();

        var authorities = (List<Map<String,String>>) claims.get("authorities");

        return  authorities.stream()
                .map(m -> new SimpleGrantedAuthority(m.get("authority")))
                .collect(Collectors.toSet());
    }

}
