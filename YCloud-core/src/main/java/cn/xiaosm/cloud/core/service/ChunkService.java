package cn.xiaosm.cloud.core.service;

import cn.xiaosm.cloud.core.entity.Bucket;
import cn.xiaosm.cloud.core.entity.Chunk;
import cn.xiaosm.cloud.core.entity.dto.UploadDTO;

import java.util.Collection;

/**
 * @author Young
 * @create 2022/12/13
 * @since 1.0.0
 */
public interface ChunkService {

    boolean save(UploadDTO dto);

    Chunk getByFileHash(String fileHash);

    boolean integrateFile(UploadDTO dto, Bucket bucket, Long parentId);

    int deleteByIds(Collection ids);

    Integer[] getUploaded(String hash);
}