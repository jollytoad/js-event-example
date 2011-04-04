package com.adaptavist.tutorial;

import com.atlassian.confluence.renderer.radeox.macros.MacroUtils;
import com.atlassian.confluence.util.velocity.VelocityUtils;
import com.atlassian.renderer.RenderContext;
import com.atlassian.renderer.v2.RenderMode;
import com.atlassian.renderer.v2.macro.BaseMacro;
import com.atlassian.renderer.v2.macro.MacroException;

import java.util.Map;

public class ExampleBoxMacro extends BaseMacro {
    public boolean hasBody() {
        return true;
    }

    public RenderMode getBodyRenderMode() {
        return RenderMode.ALL;
    }

    public String execute(Map params, String body, RenderContext renderContext) throws MacroException {
        Map<String, Object> velocityContext = MacroUtils.defaultVelocityContext();

        velocityContext.put("title", params.get("0"));
        velocityContext.put("body", body);

        return VelocityUtils.getRenderedTemplate("templates/example-box-macro.vm", velocityContext);
    }
}
