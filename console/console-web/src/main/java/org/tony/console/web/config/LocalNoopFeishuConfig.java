package org.tony.console.web.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import java.lang.reflect.Proxy;
import java.lang.reflect.Method;

// 按你项目里真实的接口完整包名来 import
import org.tony.console.biz.FeiShuBizService;

@Configuration
@Profile("local")
public class LocalNoopFeishuConfig {

    @Bean
    public FeiShuBizService feiShuBizService() {
        ClassLoader cl = FeiShuBizService.class.getClassLoader();
        Class<?>[] ifaces = new Class<?>[]{FeiShuBizService.class};
        return (FeiShuBizService) Proxy.newProxyInstance(cl, ifaces, (Object proxy, Method m, Object[] args) -> {
            Class<?> rt = m.getReturnType();
            // 原子返回：避免 NPE/原语型默认值问题
            if (rt.equals(boolean.class)) return false;
            if (rt.equals(byte.class))    return (byte)0;
            if (rt.equals(short.class))   return (short)0;
            if (rt.equals(int.class))     return 0;
            if (rt.equals(long.class))    return 0L;
            if (rt.equals(float.class))   return 0f;
            if (rt.equals(double.class))  return 0d;
            if (rt.equals(char.class))    return '\0';
            return null;
        });
    }
}

