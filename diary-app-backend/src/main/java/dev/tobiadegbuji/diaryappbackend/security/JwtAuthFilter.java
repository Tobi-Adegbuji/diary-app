package dev.tobiadegbuji.diaryappbackend.security;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.lang.Strings;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class JwtAuthFilter extends OncePerRequestFilter {


    private final JwtCreator jwtCreator;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {

        var token = retrieveJwtFromRequest(httpServletRequest);

        String authorizationHeader = httpServletRequest.getHeader("Authorization");

        if(authorizationHeader == null || authorizationHeader.isEmpty() || !authorizationHeader.startsWith("Bearer ")){
            filterChain.doFilter(httpServletRequest,httpServletResponse); //Request will be rejected.
            return;
        }

        if (StringUtils.hasText(token) && jwtCreator.validateToken(token)){
        var username = jwtCreator.getUsernameFromToken(token);
        var simpleGrantedAuthorities = jwtCreator.getAuthoritiesFromToken(token);

        Authentication authentication = new UsernamePasswordAuthenticationToken(
                username,
                null,
                simpleGrantedAuthorities
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
       filterChain.doFilter(httpServletRequest,httpServletResponse);
        }


}

        private String retrieveJwtFromRequest(HttpServletRequest request){
        //Retrieving bearer token from header
        var bearerToken = request.getHeader("Authorization");

        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer "))
            return bearerToken.substring(7);
        return bearerToken;
    }

}
